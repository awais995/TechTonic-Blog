"use client"; // Mark this as a Client Component

import React, { useState } from "react";

interface Comment {
  id: number;
  text: string;
  userId: string; // To track who created the comment
}

interface CommentsSectionProps {
  postId: string; // The ID of the blog post
  userId: string; // Current user's ID
}

const CommentsSection = ({ postId, userId }: CommentsSectionProps) => {
  // State to manage comments for this blog post
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedCommentText, setEditedCommentText] = useState("");

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = {
        id: Date.now(), // Generate a unique ID
        text: newComment,
        userId, // Associate the comment with the current user
      };
      setComments([...comments, newCommentObj]); // Add the new comment
      setNewComment(""); // Clear the input field
    }
  };

  // Start editing a comment
  const handleStartEdit = (id: number, text: string) => {
    setEditingCommentId(id);
    setEditedCommentText(text);
  };

  // Save the edited comment
  const handleSaveEdit = (id: number) => {
    if (editedCommentText.trim() !== "") {
      const updatedComments = comments.map((comment) =>
        comment.id === id ? { ...comment, text: editedCommentText } : comment
      );
      setComments(updatedComments); // Update the comment
      setEditingCommentId(null); // Exit edit mode
      setEditedCommentText(""); // Clear the edit text
    }
  };

  // Delete a comment (only for the user who created it)
  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments); // Remove the comment
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Input field for adding a new comment */}
      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          rows={3}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Post Comment
        </button>
      </div>

      {/* Display existing comments */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border border-gray-200 rounded-lg">
            {editingCommentId === comment.id ? (
              // Edit mode
              <div>
                <textarea
                  value={editedCommentText}
                  onChange={(e) => setEditedCommentText(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  rows={3}
                />
                <button
                  onClick={() => handleSaveEdit(comment.id)}
                  className="mt-2 bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingCommentId(null)}
                  className="mt-2 ml-2 bg-gray-600 text-white px-4 py-1 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              // View mode
              <div>
                <p className="text-gray-700">{comment.text}</p>
                <div className="mt-2">
                  {comment.userId === userId && (
                    <>
                      <button
                        onClick={() => handleStartEdit(comment.id, comment.text)}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="ml-4 text-sm text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;