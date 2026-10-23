require('dotenv').config();
const { PORT, CLIENT_URL, DASHBOARD_URL } = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { HoldingsModel } = require('./model/HoldingsModel');

const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { UserModel } = require('./model/UserModel');
const app = express();

const uri = process.env.MONGO_URL;

// app.use(cors());

app.use(
  cors({
    origin: [CLIENT_URL, DASHBOARD_URL],
  }),
);
app.use(bodyParser.json());
// app.get('/addHoldings', async (req, res) => {
//   let tempHoldings = [
//     {
//       name: 'BHARTIARTL',
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: '+0.58%',
//       day: '+2.99%',
//     },
//     {
//       name: 'HDFCBANK',
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: '+10.04%',
//       day: '+0.11%',
//     },
//     {
//       name: 'HINDUNILVR',
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: '+3.49%',
//       day: '+0.21%',
//     },
//     {
//       name: 'INFY',
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: '+15.18%',
//       day: '-1.60%',
//       isLoss: true,
//     },
//     {
//       name: 'ITC',
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: '+2.92%',
//       day: '+0.80%',
//     },
//     {
//       name: 'KPITTECH',
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: '+6.45%',
//       day: '+3.54%',
//     },
//     {
//       name: 'M&M',
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: '-3.72%',
//       day: '-0.01%',
//       isLoss: true,
//     },
//     {
//       name: 'RELIANCE',
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: '-3.71%',
//       day: '+1.44%',
//     },
//     {
//       name: 'SBIN',
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: '+32.63%',
//       day: '-0.34%',
//       isLoss: true,
//     },
//     {
//       name: 'SGBMAY29',
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: '-0.17%',
//       day: '+0.15%',
//     },
//     {
//       name: 'TATAPOWER',
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: '+19.15%',
//       day: '-0.24%',
//       isLoss: true,
//     },
//     {
//       name: 'TCS',
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: '+5.03%',
//       day: '-0.25%',
//       isLoss: true,
//     },
//     {
//       name: 'WIPRO',
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: '+18.08%',
//       day: '+0.32%',
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send('Done!');
// });

app.get('/addPositions', async (req, res) => {
  let tempPositions = [
    {
      product: 'CNC',
      name: 'EVEREADY',
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: '+0.58%',
      day: '-1.24%',
      isLoss: true,
    },
    {
      product: 'CNC',
      name: 'JUBLFOOD',
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: '+10.04%',
      day: '-1.35%',
      isLoss: true,
    },
  ];

  tempPositions.forEach((item) => {
    let newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });

    newPosition.save();
  });
  res.send('Done!');
});

app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  try {
    const name = String(req.body.name || '').trim();
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    const mode = String(req.body.mode || '').toUpperCase();

    if (
      !name ||
      !Number.isInteger(qty) ||
      qty <= 0 ||
      !Number.isFinite(price) ||
      price <= 0 ||
      !['BUY', 'SELL'].includes(mode)
    ) {
      return res.status(400).json({
        message: 'Invalid order details',
      });
    }

    // Save order
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    // Update holdings for BUY orders
    if (mode === 'BUY') {
      let holding = await HoldingsModel.findOne({ name });

      if (holding) {
        const oldQty = Number(holding.qty);
        const oldAvg = Number(holding.avg);
        const totalQty = oldQty + qty;

        holding.avg = (oldQty * oldAvg + qty * price) / totalQty;

        holding.qty = totalQty;
        holding.price = price;

        await holding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: '0.00%',
          day: '0.00%',
        });
      }
    }

    res.status(201).json({
      message: 'Order placed successfully',
      order: newOrder,
    });
  } catch (error) {
    console.error('Order error:', error);

    res.status(500).json({
      message: 'Failed to place order',
    });
  }
});

// Fetch all orders
app.get('/allOrders', async (req, res) => {
  try {
    const orders = await OrdersModel.find({}).sort({ _id: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

//++++++++++++++++++++++++++++++++++

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const hashOTP = (otp) => crypto.createHash('sha256').update(otp).digest('hex');

async function sendOTP(user, purpose) {
  const otp = crypto.randomInt(100000, 1000000).toString();

  user.otpHash = hashOTP(otp);
  user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
  user.otpPurpose = purpose;
  await user.save();

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Zerodha Stock Trading Platform - Email Verification Code',
      text: `Hello ${user.name},

Your verification code is ${otp}.

This code expires in 5 minutes. Do not share it with anyone.

If you did not request this code, you can ignore this email.`,
    });
  } catch (error) {
    user.otpHash = null;
    user.otpExpiresAt = null;
    user.otpPurpose = null;
    await user.save();
    throw error;
  }
}

// 1. Signup: name + email and send OTP
app.post('/auth/signup', async (req, res) => {
  try {
    const name = String(req.body.name || '').trim();
    const email = String(req.body.email || '')
      .trim()
      .toLowerCase();

    if (!name || name.length > 100) {
      return res.status(400).json({
        message: 'Enter a valid name.',
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        message: 'Enter a valid email address.',
      });
    }

    let user = await UserModel.findOne({ email });

    if (user && user.isVerified) {
      return res.status(409).json({
        message: 'Account already exists. Please log in.',
      });
    }

    if (!user) {
      user = new UserModel({ name, email });
    } else {
      user.name = name;
    }

    await sendOTP(user, 'signup');

    res.json({
      message: 'Verification code sent to your email.',
    });
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({
      message: 'Could not send verification code. Check email configuration.',
    });
  }
});

// 2. Login: only existing, verified users
app.post('/auth/login', async (req, res) => {
  try {
    const email = String(req.body.email || '')
      .trim()
      .toLowerCase();

    const user = await UserModel.findOne({
      email,
      isVerified: true,
    });

    if (!user) {
      return res.status(404).json({
        message: 'Account not found. Please sign up first.',
      });
    }

    await sendOTP(user, 'login');

    res.json({
      message: 'Login code sent to your email.',
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({
      message: 'Could not send login code.',
    });
  }
});

// 3. Verify OTP for signup or login
app.post('/auth/verify-otp', async (req, res) => {
  try {
    const email = String(req.body.email || '')
      .trim()
      .toLowerCase();
    const otp = String(req.body.otp || '').trim();
    const purpose = req.body.purpose;

    if (!/^\d{6}$/.test(otp) || !['signup', 'login'].includes(purpose)) {
      return res.status(400).json({
        message: 'Invalid verification details.',
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user || user.otpPurpose !== purpose || !user.otpHash) {
      return res.status(400).json({
        message: 'Request a new verification code.',
      });
    }

    if (!user.otpExpiresAt || user.otpExpiresAt.getTime() < Date.now()) {
      user.otpHash = null;
      user.otpExpiresAt = null;
      user.otpPurpose = null;
      await user.save();

      return res.status(400).json({
        message: 'Code expired. Request a new one.',
      });
    }

    if (hashOTP(otp) !== user.otpHash) {
      return res.status(400).json({
        message: 'Incorrect verification code.',
      });
    }

    if (purpose === 'signup') {
      user.isVerified = true;
    } else if (!user.isVerified) {
      return res.status(403).json({
        message: 'Verify your email by signing up first.',
      });
    }

    user.otpHash = null;
    user.otpExpiresAt = null;
    user.otpPurpose = null;
    await user.save();

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' },
    );

    res.json({
      message:
        purpose === 'signup'
          ? 'Account created and email verified.'
          : 'Login successful.',
      token,
      user: {
        name: user.name,
        email: user.email,
      },
      dashboardUrl: DASHBOARD_URL,
    });
  } catch (error) {
    console.error('OTP verification error:', error.message);
    res.status(500).json({
      message: 'Verification failed. Please try again.',
    });
  }
});

async function startServer() {
  try {
    if (!uri || !process.env.JWT_SECRET) {
      throw new Error('MONGO_URL or JWT_SECRET is missing in .env');
    }

    await mongoose.connect(uri);
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Backend running at ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

startServer();
