import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// export const useBear = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
// }));

interface User {
    id: string;
    email: string;
    role: string;
}

interface AuthStore {
    user: User;
    // setId: (id: string) => void;
    // setEmail: (email: string) => void;
    // setRole: (role: string) => void;
    setUser: (newUser: User) => void;
    reset: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: {
                id: '',
                email: '',
                role: '',
            },

            // setId: (newId) => set((state) => ({ id: newId })),
            // setEmail: (newEmail) => set((state) => ({ email: newEmail })),
            // setRole: (newRole) => set((state) => ({ role: newRole })),

            // setId: (newId) => set({ id: newId }),
            // setEmail: (newEmail) => set({ email: newEmail }),
            // setRole: (newRole) => set({ role: newRole }),

            setUser: (newUser: User) => set({ user: newUser }),

            reset: () => {
                set({ user: { id: '', email: '', role: '' } });
                localStorage.removeItem('auth-storage');
            },
        }),
        { name: 'auth-storage' }
    )
);
