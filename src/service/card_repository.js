import "./firebase";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";

class CardRepository {
  db = getDatabase();

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);

  }
  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }

  syncCard(userId, onUpdate) {
    const starCountRef = ref(this.db, `${userId}/cards`);
    onValue(starCountRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value)
    });
  }
}

export default CardRepository