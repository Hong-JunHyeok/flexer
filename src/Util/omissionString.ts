function omissionString(string: string = "", endNum: number = 10): string {
  return string.substring(0, endNum) + (string.length >= endNum && "...");
}

export default omissionString;
