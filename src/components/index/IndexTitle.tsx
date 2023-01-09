function IndexTitle() {
  return (
    <div className="text-center mt-2 mb-9 md:text-left">
      <h1>
        探索<span className="underline underline-offset-8 decoration-2 decoration-text-decoration md:underline-offset-[10px]">台灣之美</span>
      </h1>
      <h1>讓我們更親近這片土地</h1>

      <div className="flex gap-1 mt-[14px] justify-center items-center">
        <img src="/src/assets/icon/location.png" alt="" />
        <span className="text-sm text-[#646464] md:text-xl">台灣旅遊景點導覽 Taiwan Travel Guide</span>
      </div>
    </div>
  )
}

export default IndexTitle;
