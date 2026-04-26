import React from "react";
import { useAnchor } from "../context/AnchorContext";

function GithubStats() {
  const { quoteRef } = useAnchor();

  return (
    <>
      <div className="github-stats-container" ref={quoteRef}>
        <div className="github-stats-section">
          <div className="github-contrubution-graph">
            <h3>#Github Activity Graph</h3>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=nikku1229&bg_color=111111&color=fffce1&line=fffce1&point=e87f24&area=true&hide_border=true`}
              alt="GitHub Activity Graph"
            />
          </div>

          <div className="github-contribution">
            <img
              src="https://github-readme-stats.vercel.app/api?username=nikku1229&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&bg_color=111111&title_color=e87f24&icon_color=e87f24&text_color=ffffff&rank_icon=github"
              height="200"
              alt="GitHub Stats"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=nikku1229&theme=tokyonight&hide_border=true&background=111111&ring=e87f24&fire=e87f24&currStreakLabel=e87f24&sideLabels=e87f24&"
              height="200"
              alt="GitHub Streak"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikku1229&layout=donut&theme=tokyonight&hide_border=true&bg_color=111111&title_color=e87f24&text_color=fffce1&langs_count=8"
              height="200"
              alt="Top Languages"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubStats;
