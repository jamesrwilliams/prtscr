const slugify = (string) => {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string.toString()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const getDateStamp = () => {

  const n = new Date();

  const year = n.getFullYear();
  const month = padNumber(n.getMonth());
  const day = padNumber(n.getDate());
  const hours = padNumber(n.getHours());
  const minutes = padNumber(n.getMinutes());
  const seconds = padNumber(n.getSeconds());

  return `${year}-${month}-${day}-${hours}${minutes}${seconds}`;
}

const padNumber = (value) => {
  return (value < 10 ? '0' + value : value );
}

module.exports.slugify = slugify;
module.exports.padNumber = padNumber;
module.exports.getDateStamp = getDateStamp;
