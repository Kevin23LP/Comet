import React from 'react';
import './footerstyles.css';
import linkdin from './bxl-linkedin.svg';
import insta from './instagram-logo-24.png';
import git from './bxl-github.svg';

const Footer = () => {
  return (
    <div className='fontpopins fsect'>
        <div className='titlef'>
            <h1>Comet</h1>
            <p>Brindamos soluciones digitales para tu empresa, aprovechando al maximo la tecnologia y las mejores tecnicas para potenciar cualquier negocio.</p>
        </div>
        <div className='ficons'>
            <li><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATdJREFUSEvtlU8rRUEYh5/nqls2SKGUDQsLUbLypyx8CSUrn8LK3pewkY8hCymytpAoC4lS14KiDKO5t3HcLO65x4a3ZnHeOfN7Zn7vO41UHFaszzdACGE0QtWbbsC/AEIIe8BqEt5RN8pCWoAQQh9wD9ST6AswrDbKQHJAP3BXAAypj10BRJFKLWrusuoiL2QWPavH6WSzQLQwxpN6EkIYBJaAaaAH2FMvinYWu+gWGEk/XaoTCXAILKb8+YebW1EwdnMm+AZsqts5pBPAA9CbRrv6r6j7zYlOAM21EXQNzAC1jBStWisL2FXXk33LwEEGOFOnygIm1ViLzwghxJOMpc+GOlAWUFdfM8ApMNcS1Zb1P9XgSh1v00UxVVNDBjgC5v8BzYv2ly1qd+/L5n7/0S+74+L6dyPA0RlSfBqGAAAAAElFTkSuQmCC"/></a></li>
            <li><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAntJREFUSEvFVT1oFFEQ/r69u0AQzO2mUCxsjATRkOTeWgZSqJ2SIoqiNpamEwkWIoiFoCIpxMbCxp9YBNFKgl0a0fcup0gwhBQBGw3cbcgJks2+MYnJubfZgwtyZMuZ+eab+WZmH9Hijy3Oj90hCJQ6BOCaBQYIHAOZXoiICPDVAaYYRWMdpdJcUpFtwLJSVwmMgcztSD6RkCIj+WLxSRxXRxAUCkrIjyCdHSX/F7yKKPLd6enPW6Y6gopSr0EONZ1c5Gc2DHvCbPYsHefRJm7C1Xo4laCs1ALJg0kCAb5D5C7JGQKd1tpuOM4NAAue1j1Bf78vmcynDZzIvGtMVyOCKsk9cQIRmXSr1WHOzi7H7cu9vUfDXO4dgF9rM8sD2LeRH1j2tN67jUAAJ/D9qK56kUUBDrc5Tnto7QOQJzb9kzlydMXaLpJTiY5XXa1rC1KbgSiVC8iVuuqB+57Wo2Xff0ngfMI37ml9oeL7bwGcjvkiV+vs9g4GB7NBtRrWVWPtFbdYfFpWKiDZkZBuyTMmX1Hq1tqd3K75RKxrTCZNIga+bxNJRjxjHqcRAPjhar2/otRNkHfiOFfrmjL1a+r7ktDzmav15VSJRF54xlys+P4bAGdiuPQZrAdUkgQiVoC+NsdZDEXuATi1uYrvc45zPW3IAvz2tG5vek0hsoAoGnJLpVK8u3KhMABynOSBxOYFrjFuo0ueA1k7kvjgAEyAnAHQCZFukCeTB/n3zuSbZ8yRRh28WrvWc2nApm0iz11jLqUSLPX1HbeZzIf/+dmJtcorFr+kEqwbW/q73mKte3DInobyxB4cAA/zxswnY3fnyWx6oE0EtryDP15CFShJmxQ2AAAAAElFTkSuQmCC"/></a></li>
            <li><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAm9JREFUSEvFlU2IjlEUx39/kQ1ZIMkS5XOKZKGmiBI2hmKkKBn5Sk0yPko0+WgojeQj7AglzIYdCwuUiHyWSRYWPposTApxPGe6z3TfO8/7zjOLydm87z33f+7/nnPP+T9ikE2DfD41CcxsGLAcWALMBCZDT8wH4DlwJ/PfkPS72kWrEpjZIuAsMKmfLN8DmyTdLcIVEpjZbuBouG2ZKv4F9kg6noL7EJhZC9BW5tQCTLOk9thfQWBmCwBP1f1e3w3AFmA/MAToBLzeUwG/9RHgDHAKWBl89ZIe5CS9BGY2HHgFTAybrZIO+H8z83f4LOl7WI8Axkt6F9b7gMMh7jVQJ+mPr2OC1cC1KL12Sc1lSmVmx4BdEXaZJK9ABcFlYG0EmifpYUmCuqydn0XnnZa0PSXw8kzL05Q0vczhOcbMngCzw/pxlsHclOALMDYAOiQ1DJDgCrAmxHRJGpMSfMoGa1wA3JO0cIAEt4GlIaZb0siU4CkwKwC8W0bXkoCYPEjKV2BU8L+V5K1c8cgXgI1RYJOki2WyMLMm4HyEvSRpXUrgNb8JfAO6vc99/F2PJP0oIjIzn4dtYeB8EHNblTXJ9ZTAZ8I7aQKwGNgMrAd+halulPTTg0JJbgXc0IT8DTBDkk96pVyb2QqX36xUH4E5YfDmhyy2JnW/CjQWZNYgqSP3F4ndSWCH64+kQ9XewMwOZsn0SElkJzI52Rk7qsm1i1srcD8TsRfAS0nnkgx833G5tZSS6xxtZvWAS69PZ5skf/BeMzNX0r3AI8Bl2n/7WH+fTN/3T2anJM8kJpjisi3JH7uq/d+Pfq2bld37B8MT0hliYf0NAAAAAElFTkSuQmCC"/></a></li>

        </div>
    </div>
  );
};

export default Footer;
