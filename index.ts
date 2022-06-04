import { DateRangePicker } from '@syncfusion/ej2-calendars';
/**
 * DateRangePicker Month Picker sample
 */

let daterangepicker: DateRangePicker = new DateRangePicker({
  placeholder: 'Select a range',
  inline: true,
  start: 'Year',
  depth: 'Year',
  format: 'MMM yyyy',
});
daterangepicker.appendTo('#daterangepicker');
