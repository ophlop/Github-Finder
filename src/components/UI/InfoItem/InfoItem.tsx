export interface IInfoItem {
  icon: React.ReactNode;
  text?: string | null;
  isLink: boolean;
}

export const InfoItem = ({ icon, isLink, text }: IInfoItem) => {
  const currentText = text || "Not Available";
  let currentHref = "";

  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div className="text-gray-400 text-xs flex items-center">
      <div className="mr-4 w-5 fill-gray-800">{icon}</div>
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className="no-underline text-gray-200 hover:underline"
          >
            currentText
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
