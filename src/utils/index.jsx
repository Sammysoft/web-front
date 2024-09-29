export function TruncateText(text, maxLength = 30) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  export function addEllipsis(str, len) {
    if (str.length > len) {
      return str.slice(0, len) + '...';
    }
    return str;
  }

  export const removeQueryParams = () => {
    const url = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({}, document.title, url);
  };