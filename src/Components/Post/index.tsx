import React from 'react';
import { MdDelete } from 'react-icons/md';
import { BiSolidLike } from 'react-icons/bi';
import { MdModeComment } from 'react-icons/md';

const Post = () => {
  const handleActionsClick = (actionType) => {
    switch (actionType) {
      case 'COMMENT':
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="comment-box-container">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
          <div className="comment-box">
            <div className="comment-header">
              <div className="comment-person-details">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h4 className="text-sm text-justify font-semibold">
                  Priyanshi Lenka
                </h4>
              </div>
              <h4 className="text-sm font-medium text-slate-900">
                11 mins ago
              </h4>
            </div>
            <div className="comment">
              <h4 className="text-sm text-justify">
                Can you Please Help Me with this ? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Consectetur
                fugiat dolores, quia aliquid similique cupiditate
                doloremque eum obcaecati ullam aut consequuntur unde,
                ab soluta quae quis. Blanditiis provident ad iure.
              </h4>
              {i % 2 === 0 && (
                <img
                  src="https://mdbcdn.b-cdn.net/docs/react/extended/comments/assets/featured.jpg"
                  alt=""
                />
              )}
            </div>
            <div className="comment-footer-actions">
              <div className="comment-primary-actions">
                <h4 className="text-sm text-justify font-semibold flex items-center	gap-4px	custom-buttons">
                  124 Likes
                </h4>
                <h4
                  className="text-sm text-justify font-semibold flex items-center	gap-4px	custom-buttons"
                  onClick={() => handleActionsClick('COMMENT')}
                >
                  12 Comment
                </h4>
              </div>
            </div>
            <div className="comment-footer-actions">
              <div className="comment-primary-actions">
                <h4 className="text-sm text-justify font-semibold flex items-center	gap-4px	custom-buttons">
                  <BiSolidLike />
                  Like
                </h4>
                <h4
                  className="text-sm text-justify font-semibold flex items-center	gap-4px	custom-buttons"
                  onClick={() => handleActionsClick('COMMENT')}
                >
                  <MdModeComment />
                  Comment
                </h4>
              </div>
              <h4 className="text-sm text-justify font-semibold flex items-center	gap-4px	custom-buttons-danger">
                <MdDelete />
                Delete
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
