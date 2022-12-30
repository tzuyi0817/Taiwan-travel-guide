import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// @ts-ignore
const CustomInput = forwardRef(({ value, onClick }, ref: React.LegacyRef<HTMLInputElement>) => (
  <>
    <input
      type="text"
      className="input bg-white text-secondary placeholder:text-secondary relative"
      onClick={onClick}
      placeholder="選擇日期"
      value={value}
      ref={ref}
    />
    <img src="/src/assets/icon/calendar.png" alt="" className="absolute top-1/2 right-6 -translate-y-1/2" />
  </>
));

function GuideDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      customInput={<CustomInput />}
      dateFormat="yyyy/MM/dd"
    />
  )
}

export default GuideDatePicker;
