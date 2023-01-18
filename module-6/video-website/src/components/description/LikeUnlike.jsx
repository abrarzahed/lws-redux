import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {
  updateLikesAsync,
  updateUnlikesAsync,
} from "../../features/video/videoSlice";
export default function LikeUnlike({ id, likes, unlikes }) {
  const dispatch = useDispatch();

  const updateLikes = () => {
    dispatch(updateLikesAsync({ videoId: id, likes }));
  };
  const updateUnLikes = () => {
    dispatch(updateUnlikesAsync({ videoId: id, unlikes }));
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            onClick={updateLikes}
            className="w-5 block cursor-pointer"
            src={likeImage}
            alt="Like"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block cursor-pointer"
            src={unlikeImage}
            alt="Unlike"
            onClick={updateUnLikes}
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
}
