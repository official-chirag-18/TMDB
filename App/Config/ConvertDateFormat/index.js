import moment from 'moment';

export const FormatDate = date => {
  return moment(date).format('DD-MM-YYYY');
};
