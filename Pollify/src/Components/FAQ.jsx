import { useState } from 'react'

const FAQ_ITEMS = [
  {
    id: 'account',
    q: 'Do I really not need an account to create or vote on a poll?',
    a: 'Absolutely not. We believe in zero friction. You can create, share, and vote on polls without ever typing an email or creating a password.',
  },
  {
    id: 'free',
    q: 'Is Pollify completely free?',
    a: 'Yes, 100% free. Create unlimited polls, collect unlimited votes, and share your links anywhere with no hidden limits or paywalls.',
  },
  {
    id: 'results',
    q: 'How do live results work?',
    a: 'Pollify uses Firebase Firestore real-time listeners. As soon as a voter selects an option and submits, all open screens instantly recalculate percentages and animate the progress bars.',
  },
  {
    id: 'anonymous',
    q: 'Are voter choices anonymous?',
    a: 'Yes. We do not store personal profiles, emails, or track private identities. Only clean vote tallies are updated.',
  },
  {
    id: 'multiselect',
    q: 'Can voters select multiple choices?',
    a: 'Yes! When creating your poll, simply toggle the "Multiple Selection" switch on your stationery card.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState('account')

  function handleToggle(id) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section id="faqs" className="editorial-section">
      <div className="section-header-editorial">
        <span className="section-kicker">Helpful Answers</span>
        <h2 className="section-heading-lg">
          Frequently asked <em>questions</em>
        </h2>
        <p className="section-subtext">
          Everything you wanted to know about how Pollify keeps things light, fast, and simple.
        </p>
      </div>

      <div className="faq-accordion-container">
        {FAQ_ITEMS.map(item => {
          const isOpen = openId === item.id
          return (
            <div
              className={`stationery-faq-item ${isOpen ? 'is-open' : ''}`}
              key={item.id}
            >
              <button
                className="stationery-faq-btn"
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq-icon-round" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer-pane">
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}