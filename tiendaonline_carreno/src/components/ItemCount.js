export const ItemCount = ({ count, handleCount }) => {
    return (
      <div className="d-flex flex-row m-3">
        <button onClick={() => handleCount("minus")} className="form-control btn btn-danger"> - </button>
        <span className="form-control" id="counter">
          <strong>{count}</strong>
        </span>
        <button onClick={() => handleCount("plus")} className="form-control btn btn-success"> + </button>
      </div>
    );
  };