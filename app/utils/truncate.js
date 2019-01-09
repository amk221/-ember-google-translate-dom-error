export default function truncate(string = '', limit, ellipsis = '…') {
  if (string.length > limit) {
    string = string.substring(0, limit).trim() + ellipsis;
  }

  return string;
}
