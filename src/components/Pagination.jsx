import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex flex-row justify-center items-center border-2 fixed bottom-0 bg-white'>
     <div className='flex justify-between w-11/12 max-w-[640px] py-2'>
     <div className='flex gap-2'>
      { page > 1 && 
        (<button
        className='rounded-md py-1 px-3 border-2 '
        onClick={ () =>handlePageChange(page-1)}>
          Previous
          </button>)
          
        }

        {
          page < totalPages &&
          ( <button
          className='rounded-md py-1 px-3 border-2 flex flex-col'
          onClick={() => handlePageChange(page+1)}>
            Next
          </button>)
        
        }

     </div>
      

      <p className='font-bold text-sm flex flex-col justify-center items-center'>
        Page {page} of {totalPages}
      </p>
     </div>
    </div>
  )
}

export default Pagination
