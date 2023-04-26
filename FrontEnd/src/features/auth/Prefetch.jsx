import { useEffect } from 'react';
import { store } from '../../app/store';
import { notesApiSlice } from '../notes/notesApiSlice';
import { usersApiSlice } from '../users/UsersApiSlice';
import { Outlet } from 'react-router-dom';



const Prefetch = () => {
  useEffect(() => {
    console.log ( 'subscribing')
    const notes = store.dispatch( notesApiSlice.endpoints.getNotes.initiate() )
    const users = store.dispatch( usersApiSlice.endpoints.getUsers.initiate() )

    // clean up method
    return () => {
      console.log ( 'unsubscribing')
      notes.unsubscribe()
      users.unsubscribe()
    }
  }, [])

  return <Outlet />
}
export default Prefetch