import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set((state) => ({ counter: 0 })),
}));

export default useCounterStore;

// set((store) => ({// your state update logic}))
// the reason why we are using () in the body of set function
// is bkz if we had used {} directly it would act like function body and not the expression.
