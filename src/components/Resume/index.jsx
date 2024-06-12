import './index.scss'
import React from 'react';
import resumePDF from '../../assets/pdfs/resume.pdf'
import { Document, Page, pdfjs} from 'react-pdf';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import ParticleComponent from '../particles'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString()

const Resume = () =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

      const goToNextPage = () => {
        setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
      };
    
      const goToPrevPage = () => {
        setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
      };
    return(
      <>
        <ParticleComponent/>
        <main className='resume-page'>
            <section className='resume-section'>
                <button className='download-btn'> 
                    <a href={resumePDF} download={resumePDF.pdf} target='_blank'>
                    <FontAwesomeIcon icon={faArrowDown} color='#44CFCB;'/>
                    Download CV
                    </a>
                </button>
                <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
                </Document>
                <div className="page-controls">
                    <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                    Page Down
                    </button>
                    <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                    Page Up
                    </button>
                </div>
            </section>
        </main>
      </>
    )
}
export default Resume;