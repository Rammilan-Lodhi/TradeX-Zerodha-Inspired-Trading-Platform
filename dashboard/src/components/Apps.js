import React, { useState } from 'react';

const apps = [
  {
    icon: '📊',
    title: 'TradingView',
    description:
      'Analyze stocks with advanced charts, indicators and market tools.',
    buttonText: 'Explore',
    details: [
      'View stock price charts',
      'Analyze market trends',
      'Explore technical indicators',
    ],
  },
  {
    icon: '📈',
    title: 'Market Watch',
    description: 'Track your favorite stocks and monitor their latest prices.',
    buttonText: 'Open',
    details: [
      'Track NIFTY 50 and SENSEX',
      'Monitor stock prices',
      'Manage your watchlist',
    ],
  },
  {
    icon: '💰',
    title: 'Portfolio',
    description: 'View your holdings, investments and portfolio performance.',
    buttonText: 'View Portfolio',
    details: [
      'View your stock holdings',
      'Check investment value',
      'Review profit and loss',
    ],
  },
  {
    icon: '📋',
    title: 'Orders',
    description: 'Check your completed, pending and cancelled orders.',
    buttonText: 'View Orders',
    details: [
      'View completed orders',
      'Check pending orders',
      'Review cancelled orders',
    ],
  },
  {
    icon: '📰',
    title: 'Market News',
    description: 'Stay updated with important stock market information.',
    buttonText: 'Read News',
    details: [
      'Latest stock market updates',
      'Company announcements',
      'Market trends and headlines',
    ],
  },
  {
    icon: '⚙️',
    title: 'Settings',
    description: 'Manage your profile and application preferences.',
    buttonText: 'Settings',
    details: [
      'Manage your profile',
      'Update account preferences',
      'Configure application settings',
    ],
  },
];

function Apps() {
  const [expandedApp, setExpandedApp] = useState(null);

  const handleAppClick = (title) => {
    setExpandedApp((current) => (current === title ? null : title));
  };

  return (
    <div className='container-fluid p-4'>
      <h2 className='fw-bold mb-3'>Apps</h2>

      <p className='text-secondary mb-4'>
        Explore useful tools and applications for your trading experience.
      </p>

      <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4'>
        {apps.map((app) => {
          const isExpanded = expandedApp === app.title;

          return (
            <div className='col' key={app.title}>
              <div className='card h-100 shadow-sm rounded-3'>
                <div className='card-body d-flex flex-column p-4'>
                  <div className='fs-2 mb-3'>{app.icon}</div>

                  <h4 className='card-title fw-bold mb-3'>{app.title}</h4>

                  <p className='card-text text-secondary'>{app.description}</p>

                  {isExpanded && (
                    <div className='border rounded-3 bg-light p-3 mt-2 mb-3'>
                      <h6 className='fw-bold mb-3'>{app.title} Details</h6>

                      <ul className='mb-0 ps-3'>
                        {app.details.map((detail) => (
                          <li className='mb-2' key={detail}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    type='button'
                    className={`btn ${
                      isExpanded ? 'btn-outline-secondary' : 'btn-primary'
                    } align-self-start mt-auto`}
                    onClick={() => handleAppClick(app.title)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show Less' : app.buttonText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Apps;
