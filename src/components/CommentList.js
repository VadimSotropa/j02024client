import React from 'react';
import '../style.css';

const CommentList = ({
  comments,
  feedbackTypeFilter,
  setFeedbackTypeFilter,
  feedbackCategoriesFilter,
  setFeedbackCategoriesFilter,
}) => {
  const feedbackTypes = ['Complaints', 'Suggestions', 'Thanks'];
  const feedbackCategoriesOptions = [
    'Organization',
    'Transportation',
    'Venues',
    'Matches',
    'Olympic Village',
    'Entertainment',
    'Accommodation',
    'Food/Drinks',
    'Other',
  ];

  const handleTypeFilterChange = (type) => {
    console.log('Type Filter Changed:', type);
    setFeedbackTypeFilter(type);
  };

  const handleCategoryFilterChange = (category) => {
    console.log('Category Filter Changed:', category);
    setFeedbackCategoriesFilter((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleClearFilters = () => {
    setFeedbackTypeFilter('');
    setFeedbackCategoriesFilter([]);
  };

  return (
    <div className="comment-list">
      {/* Mobile Filter Section */}
      <div className="filter-container filter-mobile">
        <div className="filters">
          <div className="filter-group">
            {feedbackTypes.map((type) => (
              <React.Fragment key={type}>
                <input
                  type="radio"
                  id={`radio-${type}-mobile`} // Ensure unique IDs for mobile
                  name="feedbackTypeFilter"
                  value={type}
                  checked={feedbackTypeFilter === type}
                  onChange={() => handleTypeFilterChange(type)}
                />
                <label htmlFor={`radio-${type}-mobile`}>{type}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="filter-group-checkbox">
          {feedbackCategoriesOptions.map((category) => (
            <React.Fragment key={category}>
              <input
                type="checkbox"
                id={`checkbox-${category}-mobile`}
                value={category}
                checked={feedbackCategoriesFilter.includes(category)}
                onChange={() => handleCategoryFilterChange(category)}
              />
              <label htmlFor={`checkbox-${category}-mobile`}>{category}</label>
            </React.Fragment>
          ))}
        </div>

        <button className="btn-filter" onClick={handleClearFilters}>
          All
        </button>
      </div>
      
      {/* Comment List Section */}
      <ul className="comment-message">
        {comments.map((comment) => (
          <li className="coment-message-body" key={comment._id || comment.name}> {/* Ensure _id is unique or use another unique property */}
            <h3 className="comment-name-country">
              {comment.name}
              <p className="coment-country">({comment.country})</p>
            </h3>
            <p className="coment-coment">{comment.comment}</p>
            <div className="coment-type-categorie">
              <p>{comment.feedbackType}</p>
              <p>{Array.isArray(comment.feedbackCategories) ? comment.feedbackCategories.join(', ') : 'None'}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Desktop Filter Section */}
      <div className="filter-container filter-deckstop">
        <div className="filters">
          <div className="filter-group">
            {feedbackTypes.map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="feedbackTypeFilter"
                  value={type}
                  checked={feedbackTypeFilter === type}
                  onChange={(e) => handleTypeFilterChange(e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group-checkbox">
          {feedbackCategoriesOptions.map((category) => (
            <label key={category} className="filter-checkbox">
              <input
                type="checkbox"
                value={category}
                checked={feedbackCategoriesFilter.includes(category)}
                onChange={() => handleCategoryFilterChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <button className="btn-filter" onClick={handleClearFilters}>
          All
        </button>
      </div>
    </div>
  );
};

export default CommentList;
