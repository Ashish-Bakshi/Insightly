import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import CountUp from "./layouts/components/CountUp";

const LandingPage: React.FC = () => {
  const [done, setDone] = useState<boolean>(false);

  return (
    <section className="bg-gray-50 pt-16">
      <div className="text-center pt-5">
        <div className="pb-4">
          <div className="inline-flex items-center text-indigo-600 border rounded-full bg-indigo-50 py-1 px-3 text-sm font-medium">
            <TrendingUp className="h-4 w-4 mr-1" />
            Trending Insights
          </div>
        </div>
        <div>
          <h1 className="text-7xl font-bold text-gray-900 mt-2">
            Insights That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Matter
            </span>
          </h1>
          <p className="text-gray-600 text-xl mt-2 pt-5">
            Discover the stories, trends, and ideas shaping tomorrow. Join{" "}
            <br /> our community of forward-thinking readers who stay ahead of
            the curve.
          </p>
        </div>
        <div className="pt-10 flex align-center justify-center space-x-40">
          <div className="text-3xl font-bold text-gray-900">
            <div>
              <CountUp
                from={300}
                to={500}
                separator=","
                direction="up"
                duration={0.5}
                className="count-up-text"
                onEnd={() => setDone(true)}
              />
              {done && <span>+</span>}
            </div>
            <div>
              {done && <span className="text-gray-600 text-sm">Articles</span>}
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">
            <div>
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                onEnd={() => setDone(true)}
              />
              {done && <span>K+</span>}
            </div>
            <div>
              {done && <span className="text-gray-600 text-sm">Readers</span>}
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">
            <div>
              <CountUp
                from={0}
                to={25}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                onEnd={() => setDone(true)}
              />
              {done && <span>+</span>}
            </div>
            <div>
              {done && (
                <span className="text-gray-600 text-sm">Cateogaries</span>
              )}
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">
            <div>
              <CountUp
                from={0}
                to={12}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                onEnd={() => setDone(true)}
              />
              {done && <span>+</span>}
            </div>
            <div>
              {done && <span className="text-gray-600 text-sm">Writers</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
