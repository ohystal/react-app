export default function Post(post) {
  
  return (
    <div className="card">
      <img className="card__img" src="" />
      <div className="card__inner">
        <div className="card__text">
          <p className="card__text-titile">Один зимний день в&nbsp;Венеции</p>
          Говорят, что Венецию покинуло 70% местных жителей. Говорят, что это
          <p className="card__text-description">
            из-за сверх туризма. Еще говорят, что Венеци&hellip;
          </p>
        </div>
        <div className="card__bottom">
          <span className="card__bottom-location">Италия, Венеция</span>  
          <a href="">Подробнее</a> 
        </div>
      </div>
    </div>
  );
}
