import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DatePicker = () => {
  const datepickerRef = useRef(null);

  useEffect(() => {
    flatpickr(datepickerRef.current, {
      enableTime: false,
      dateFormat: "Y-m-d",
    });
  }, []);

  return (
    <input
      className="p-3 w-full border border-gray-300 rounded-lg outline-none"
      ref={datepickerRef}
    />
  );
};

export default DatePicker;
