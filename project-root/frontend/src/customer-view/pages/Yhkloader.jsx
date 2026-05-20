import React, { useEffect, useRef, useState } from 'react';
import './Yhkloader.css';

const STEPS = [
  { msg: 'Booting up our launch experience…',   sub: 'OnePlus 13 Pro is on the way',         icon: '🔋', fill: 10  },
  { msg: 'Fine-tuning the design…',            sub: 'Precision-crafted for peak performance', icon: '⚡', fill: 30  },
  { msg: 'Loading advanced features…',         sub: 'Camera, display and battery tuning',    icon: '📸', fill: 55  },
  { msg: 'Wrapping up packaging…',             sub: 'Preparing your premium order',          icon: '📦', fill: 78  },
  { msg: 'Almost there…',                      sub: 'Your OnePlus device will be shipped soon', icon: '🚀', fill: 95  },
];

const TIPS = [
  { label: 'Did you know?',   text: 'OnePlus 13 Pro supports 150W fast charging for a full day of power in minutes.' },
  { label: 'Feature highlight', text: 'The 120Hz Fluid AMOLED display adapts for smoother scrolling and gaming.' },
  { label: 'Pro tip',          text: 'Use OxygenOS for a clean, responsive mobile experience.' },
  { label: 'Design note',      text: 'Crafted with a sleek matte finish and premium build quality.' },
  { label: 'Fast fact',        text: 'OnePlus devices are built for speed, style and intelligent battery life.' },
];

const ORBIT_ITEMS = ['📱', '⚡', '📸', '🔋', '🚀', '✨'];

const YHKLoader = ({ message, fullPage = false }) => {
  const [step, setStep]       = useState(0);
  const [animate, setAnimate] = useState(false);
  const angleRef              = useRef(0);
  const orbitRefs             = useRef([]);
  const rafRef                = useRef(null);

  // Step rotation
  useEffect(() => {
    const id = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setStep(s => (s + 1) % STEPS.length);
        setAnimate(true);
      }, 50);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  // Orbit animation
  useEffect(() => {
    const loop = () => {
      angleRef.current += 0.3;
      orbitRefs.current.forEach((el, i) => {
        if (!el) return;
        const a = (angleRef.current + i * 60) * Math.PI / 180;
        el.style.left      = (80 + 66 * Math.cos(a) - 14) + 'px';
        el.style.top       = (80 + 66 * Math.sin(a) - 14) + 'px';
        el.style.transform = `rotate(${-angleRef.current}deg)`;
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const s = STEPS[step];
  const t = TIPS[step];

  return (
    <div className={`yhk-loader-wrap ${fullPage ? 'yhk-loader-wrap--fullpage' : ''}`}>
      <div className="yhk-loader-card">

        {/* Brand */}
        <div className="yhk-brand">
          <div className="yhk-brand__dot">📱</div>
          <div>
            <div className="yhk-brand__name">OnePlus 13 Pro</div>
            <div className="yhk-brand__tag">Fast · Premium · Powerful</div>
          </div>
        </div>

        {/* Animation stage */}
        <div className="yhk-stage">
          <div className="yhk-ring yhk-ring--outer" />
          <div className="yhk-ring yhk-ring--inner" />

          <span className="yhk-leaf yhk-leaf--1">🌿</span>
          <span className="yhk-leaf yhk-leaf--2">🍃</span>
          <span className="yhk-leaf yhk-leaf--3">🌱</span>

          {ORBIT_ITEMS.map((item, i) => (
            <div
              key={`orbit-${i}`}
              className="yhk-orbit-item"
              ref={el => orbitRefs.current[i] = el}
            >
              {item}
            </div>
          ))}

          <div className="yhk-centre">
            <div className={`yhk-centre__icon ${animate ? 'yhk-centre__icon--swap' : ''}`}>
              {s.icon}
            </div>
            <div className="yhk-centre__bar" />
          </div>
        </div>

        {/* Message */}
        <div className="yhk-msg" key={`step-${step}-msg`}>{message || s.msg}</div>
        <div className="yhk-submsg" key={`step-${step}-sub`}>{s.sub}</div>

        {/* Progress */}
        <div className="yhk-track">
          <div className="yhk-fill" style={{ width: s.fill + '%' }} />
        </div>

        {/* Step dots */}
        <div className="yhk-dots">
          {STEPS.map((_, i) => (
            <div key={`step-${i}`} className={`yhk-dot ${i === step ? 'yhk-dot--active' : ''}`} />
          ))}
        </div>

        {/* Tip card */}
        <div className="yhk-tip" key={`step-${step}-tip`}>
          <div className="yhk-tip__label">{t.label}</div>
          <div className="yhk-tip__text">{t.text}</div>
        </div>

      </div>
    </div>
  );
};

export default YHKLoader;