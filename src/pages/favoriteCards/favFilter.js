export default function favFilter(cards, token) {
    return cards.filter((card) => {
        return card.likes.includes(token);
    });
}