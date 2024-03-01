export default function date(str) {
  return new Date(str).toISOString().split("T")[0];
}
