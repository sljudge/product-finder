export default (isWhite: boolean) => ({
  container:
    "min-h-40 h-40 sm:min-h-50 sm:h-50 lg:h-60 lg:min-h-60 relative bg-center bg-cover bg-no-repeat bg-gray-400 flex flex-col items-center justify-center max-w-screen",
  header: `mb-2 p-4 text-3xl font-semibold min-w-24 ${isWhite && "text-white"}`,
  subHeader: `p-2 text-xl min-w-24 ${isWhite && "text-white"}`,
});
