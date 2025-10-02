export const formatBoldText = (text: string) => {
  return text.replace(/<bold>(.*?)<\/bold>/g, (match, content) => {
    return `<strong class="font-bold text-blue-400">${content}</strong>`;
  });
};