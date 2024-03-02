function VerticalClock({ finalHour, finalMinute, finalSeconds }) {
  const hourColour = localStorage.getItem('hourColour') || '#fff';
  const minuteColour = localStorage.getItem('minuteColour') || '#ƒff';

  return (
    <span className="new-clock clock-container">
      <div className="hour" style={{ color: hourColour }}>
        {finalHour}
      </div>
      <div className="minute" style={{ color: minuteColour }}>
        {finalMinute}
      </div>
      <div className="seconds">{finalSeconds}</div>
    </span>
  );
}

export { VerticalClock as default, VerticalClock };
