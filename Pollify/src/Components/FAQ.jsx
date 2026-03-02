import { useState } from 'react'

const FAQ_ITEMS = [
  {
    id: 'account',
    q: 'Do I really not need an account to create a poll?',
    a: 'Correct. We believe in zero friction. You can create, share, and manage your polls without ever giving us your email or creating a password.',
  },
  {
    id: 'free',
    q: 'Is Pollify actually free?',
    a: 'Yes, completely free. Create unlimited polls, get unlimited votes, with no hidden fees or paywalls.',
  },
  {
    id: 'results',
    q: 'How do I see the results of my poll?',
    a: 'After creating your poll you get a creator link to view live results. Results update in real-time as votes come in.',
  },
  {
    id: 'anonymous',
    q: 'Are the votes anonymous?',
    a: "Yes. We don't collect any personal information from voters. No IP tracking, no cookies—just clean, anonymous votes.",
  },
  {
    id: 'limit',
    q: 'Can I limit people to one vote each?',
    a: 'Yes. When creating your poll, you can enable vote limiting. We use session-based tracking to prevent duplicate votes without requiring a login.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button
        className={isOpen ? 'faq-q open' : 'faq-q'}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {item.q}
        <span className={isOpen ? 'faq-toggle' : 'faq-toggle closed'}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={isOpen ? 'faq-a open' : 'faq-a'}>
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState('account')

  function handleToggle(id) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section>
      <div className="faq-title-block">
        <div className="section-label">Common Questions</div>
        <div className="section-title">
          Frequently Asked<br />
          <span className="section-title-accent">Questions</span>
        </div>
      </div>
      {FAQ_ITEMS.map(item => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
      <p className="still-q">
        Still have questions? <a href="#">Get in touch with us</a>
      </p>
    </section>
  )
}