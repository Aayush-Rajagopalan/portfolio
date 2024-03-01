"use client";
import clsx from "clsx";
import React, { FunctionComponent, useState } from "react";

import CSS3Logo from "../assets/svg/logo/fa-css3.svg";
import DockerLogo from "../assets/svg/logo/fa-docker.svg";
import GitHubLogo from "../assets/svg/logo/fa-github.svg";
import LinuxLogo from "../assets/svg/logo/fa-linux.svg";
import NodeJSLogo from "../assets/svg/logo/fa-nodejs.svg";
import ReactLogo from "../assets/svg/logo/fa-react.svg";
import AdjustmentsIcon from "../assets/svg/logo/hero-adjustments.svg";
import CloudIcon from "../assets/svg/logo/hero-cloud.svg";
import DatabaseIcon from "../assets/svg/logo/hero-database.svg";
import GlobeIcon from "../assets/svg/logo/desktop-solid.svg";
import NextJSLogo from "../assets/svg/logo/logos-nextjs.svg";
import TailwindCSSLogo from "../assets/svg/logo/logos-tailwindcss.svg";
import TypeScriptLogo from "../assets/svg/logo/logos-typescript.svg";
import AzureLogo from "../assets/svg/logo/azure.svg";
import AWSLogo from "../assets/svg/logo/aws.svg";
import ChipLogo from "../assets/svg/logo/microchip-solid.svg";
import PowershellLogo from "../assets/svg/logo/terminal-solid.svg";
import BashLogo from "../assets/svg/logo/cube-solid.svg";
import HomeLogo from "../assets/svg/logo/house-signal-solid.svg";

interface ItemProps {
  icon: FunctionComponent<any>;
  label: string;
}

export function Item({ icon: Icon, label }: ItemProps) {
  return (
    <div className="rounded-lg bg-neutral-800 p-6 transition-transform sm:hover:scale-[102%]">
      <Icon className="mr-6 inline h-6 w-6 text-gray-100" />
      <span className="font-bold text-white">{label}</span>
    </div>
  );
}

interface TabProps {
  icon: FunctionComponent<any>;
  label: string;
  selected?: boolean;

  onSelect(): void;
}

export function Tab({ icon: Icon, label, selected, onSelect }: TabProps) {
  return (
    <button
      type="button"
      className="flex flex-col items-center"
      onClick={onSelect}
    >
      <Icon
        className={clsx(
          "mb-3 h-8 w-8 text-gray-400 transition-colors md:h-12 md:w-12 ",
          selected && "text-indigo-400"
        )}
      />
      <span
        className={clsx(
          "text-xs font-bold text-gray-400 transition-colors md:text-sm",
          selected && "text-indigo-400"
        )}
      >
        {label}
      </span>
    </button>
  );
}

export default function Stack() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="container m-auto px-4 pt-10">
      <h2 className="py-4 text-3xl font-extrabold text-white">My Stack</h2>
      <span className="text-xl text-gray-400">
        Technology that Im specialised in
      </span>
      <div className="flex flex-col">
        <div className="mt-12 flex flex-row gap-8 sm:gap-10 md:flex-1">
          <Tab
            icon={GlobeIcon}
            label="Frontend"
            selected={selectedTab === 0}
            onSelect={() => setSelectedTab(0)}
          />
          <Tab
            icon={DatabaseIcon}
            label="Backend"
            selected={selectedTab === 1}
            onSelect={() => setSelectedTab(1)}
          />
          <Tab
            icon={CloudIcon}
            label="Services"
            selected={selectedTab === 2}
            onSelect={() => setSelectedTab(2)}
          />
          <Tab
            icon={AdjustmentsIcon}
            label="Tools"
            selected={selectedTab === 3}
            onSelect={() => setSelectedTab(3)}
          />
        </div>
        <div className="mt-8 grid h-min gap-4 sm:grid-cols-2 md:flex-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
          {selectedTab === 0 && (
            <>
              <Item icon={NextJSLogo} label="Next.js" />
              <Item icon={ReactLogo} label="React" />
              <Item icon={TailwindCSSLogo} label="TailwindCSS" />
              <Item icon={CSS3Logo} label="CSS" />
              <Item icon={TypeScriptLogo} label="TypeScript" />
            </>
          )}
          {selectedTab === 1 && (
            <>
              <Item icon={NodeJSLogo} label="Node.js" />
              <Item icon={PowershellLogo} label="Python" />
              <Item icon={PowershellLogo} label="Powershell" />
              <Item icon={BashLogo} label="Bash" />
            </>
          )}
          {selectedTab === 2 && (
            <>
              <Item icon={DockerLogo} label="Docker" />
              <Item icon={GitHubLogo} label="GitHub" />
              <Item icon={AzureLogo} label="Azure" />
              <Item icon={AWSLogo} label="AWS" />
              <Item icon={LinuxLogo} label="Linux" />
            </>
          )}
          {selectedTab === 3 && (
            <>
              <Item icon={ChipLogo} label="Arduino" />
              <Item icon={ChipLogo} label="ESP 32" />
              <Item icon={ChipLogo} label="Raspberry Pi" />
              <Item icon={HomeLogo} label="Home Assistant" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
