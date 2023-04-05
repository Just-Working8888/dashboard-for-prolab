import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/GETuser/GetuserSlice';


function UserComponent() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <div>{data.name}</div>
          <div>{data.email}</div>
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default UserComponent;
