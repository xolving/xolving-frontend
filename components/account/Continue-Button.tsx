export default function ContinueButton({ error }: { error?: any[] }) {
  return (
    <div>
      {error?.includes(1) && (
        <p className="mb-2 text-red-600 text-sm">
          Captcha 인증이 끝나고 다시 눌러주세요.
        </p>
      )}
      <button
        className={`${
          error?.includes(1) ? 'border-red-600' : 'border-neutral-600'
        } focus:left-20 duration-300 w-fit bg-neutral-800 rounded-lg text-sm px-5 py-2 border text-neutral-300`}
      >
        계속하기
      </button>
    </div>
  );
}
