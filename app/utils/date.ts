export function localDateString(dateString: string) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString('pt-br');
}