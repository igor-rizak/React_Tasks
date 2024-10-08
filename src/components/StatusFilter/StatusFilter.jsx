import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from '../../Redux/selectors.js';
import { setStatusFilter } from '../../Redux/actions.js';
import { statusFilters } from '../../Redux/constants.js';
import { Button } from 'components/Button/Button.jsx';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
