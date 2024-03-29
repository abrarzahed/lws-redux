import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  conversationsApi,
  useAddConversationMutation,
  useEditConversationMutation,
} from "../../features/conversations/conversationsApi";
import { useGetUsersQuery } from "../../features/users/usersApi";
import { validateEmail } from "../../utils/validateEmail";
import Error from "../ui/Error";

export default function Modal({ open, control }) {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [shouldCheckUser, setShouldCheckUser] = useState(false);

  const { user: loggedInUser } = useSelector((state) => state.auth) || {};
  const { email: loggedInUserEmail } = loggedInUser || {};
  const [responseError, setResponseError] = useState("");
  const [conversations, setConversations] = useState(undefined);

  const dispatch = useDispatch();

  const { data: participants } = useGetUsersQuery(to, {
    skip: !shouldCheckUser,
  });

  const [addConversation, { isSuccess: isAddConversationSuccess }] =
    useAddConversationMutation();
  const [editConversation, { isSuccess: isEditConversationSuccess }] =
    useEditConversationMutation();

  useEffect(() => {
    if (participants?.length > 0 && participants?.email !== loggedInUserEmail) {
      // check conversation existence
      dispatch(
        conversationsApi.endpoints.getConversation.initiate({
          currentUserEmail: loggedInUserEmail,
          partnerEmail: to,
        })
      )
        .unwrap()
        .then((data) => {
          setConversations(data);
        })
        .catch((err) => {
          setResponseError("There was an error");
        });
    }
  }, [participants, loggedInUserEmail, dispatch, to]);

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    if (validateEmail(value)) {
      // check user API
      setShouldCheckUser(true);
      setTo(value);
      console.log("valid email");
    }
  };

  const handleSearch = debounceHandler(doSearch, 500);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (conversations?.length > 0) {
      // edit conversation
      editConversation({
        id: conversations[0].id,
        data: {
          participants: `${loggedInUserEmail}-${participants[0]?.email}`,
          users: [loggedInUser, participants],
          message,
          timestamp: new Date().getTime(),
        },
      });
    } else if (conversations?.length === 0) {
      // add conversation
      addConversation({
        participants: `${loggedInUserEmail}-${participants[0]?.email}`,
        users: [loggedInUser, participants],
        message,
        timestamp: new Date().getTime(),
      });
    }
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Send message
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="to" className="sr-only">
                  To
                </label>
                <input
                  id="to"
                  name="to"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Send to"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
                disabled={
                  conversations === undefined ||
                  participants[0]?.email === loggedInUserEmail
                }
              >
                Send Message
              </button>
            </div>

            {participants?.length === 0 && (
              <Error message="user does not exist!" />
            )}
            {participants?.length > 0 &&
              participants[0]?.email === loggedInUserEmail && (
                <Error message="you can not send message to yourself" />
              )}
            {responseError !== "" && <Error message={responseError} />}
          </form>
        </div>
      </>
    )
  );
}
