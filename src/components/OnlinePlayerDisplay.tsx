import { useEffect, useRef } from 'react';
import { useNumberOfPlayers } from '../api/gather';
import '../assets/css/display.css';
import Heart from './Heart';

export default function OnlinePlayerDisplay() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { data } = useNumberOfPlayers();

  useEffect(() => {
    if (!!textRef.current) {
      textRef.current.innerHTML = textRef.current.innerText
        .split('')
        .map((char, i) => `<b style="transform: rotate(${i * 12}deg)">${char}</b>`)
        .join('');
    }
  }, [textRef.current]);

  return (
    <div className="background">
      <div className="loader">
        <div className="text">
          <p ref={textRef}>현재게더접속자수</p>
        </div>
        <span>
          <i></i>
        </span>
        <h2>{data?.count ?? 0}명</h2>
        <Heart />
      </div>
    </div>
  );
}
