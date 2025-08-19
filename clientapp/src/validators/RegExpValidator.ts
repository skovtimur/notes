export default function regExpValidator(pattern: RegExp, text: string) {
  return pattern.test(text);
}
