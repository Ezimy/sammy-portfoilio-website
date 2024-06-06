import './index.scss'
import React from 'react';
import resumePDF from '../../assets/pdfs/resume.pdf'
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString()

const Resume = () =>{
    return(
        <main className='resume-page'>
            <section>
            <div>
                <Document file={resumePDF}>
                    <Page pageNumber={1}/>
                </Document>
            </div>
            </section>
        </main>
    )
}
export default Resume;