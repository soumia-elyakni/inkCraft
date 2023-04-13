export const ACTIVE_STORIE = 'ACTIVE_STORIE';
export const DEACTIVATE_STORIE = 'DEACTIVATE_STORIE';

export const activestorie = (id) => {
  return {
    type: ACTIVE_STORIE,
    payload: id,
  };
};

export const desactivateStorie = () => {
  return {
    type: DEACTIVATE_STORIE,
  };
};
