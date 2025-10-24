import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/theme-provider.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Toaster } from 'sonner';
import RootLayout from './pages/layout.tsx';
import App from './pages';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import CreateTopics from './pages/topics/[id]/create.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route index element={<App />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="sign-up" element={<SignUp />} />
                        <Route path="topics/:id/create" element={<CreateTopics />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster richColors position="top-center" />
        </ThemeProvider>
    </StrictMode>
);
