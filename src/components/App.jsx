import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader.jsx';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CamperDetailPage = lazy(() => import("../pages/CamperDetailPage/CamperDetailPage"));

export default function App() {
    return (
        <Suspense fallback ={<Loader/>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<CamperDetailPage />} />
            </Routes>
        </Suspense>
    );
}