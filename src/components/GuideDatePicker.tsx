import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  selected?: Date;
  onChange(date: Date | null, event: React.SyntheticEvent<any, Event> | undefined): void
}

// @ts-ignore
const CustomInput = forwardRef(({ value, onClick }, ref: React.LegacyRef<HTMLInputElement>) => (
  <>
    <input
      type="text"
      className="input bg-white text-secondary placeholder:text-secondary relative mt-2"
      onClick={onClick}
      placeholder="選擇日期"
      value={value}
      ref={ref}
      readOnly
    />
    <img src="/src/assets/icon/calendar.png" alt="" className="absolute top-1/2 right-6 -translate-y-1/2" />
  </>
));

function GuideDatePicker(props: Props) {
  return (
    <DatePicker
      {...props}
      customInput={<CustomInput />}
      dateFormat="yyyy/MM/dd"
    />
  )
}

export default GuideDatePicker;
