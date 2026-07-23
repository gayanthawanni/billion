"use client";

import React, { useState } from "react";
import { Briefcase, ChevronDown, Monitor, Calculator, Megaphone, Settings, Users, Landmark, GraduationCap, Heart, Headphones, Compass, Truck, Palette, Scale, Globe, Tv, Hammer, ShoppingBag, Sprout, Shield, Trophy, Grid, Search } from "lucide-react";

const categories = [
  { name: "All Categories", count: "2,684", active: true, icon: <Grid size={16} /> },
  { name: "IT & Software", count: "542", icon: <Monitor size={16} /> },
  { name: "Accounting & Finance", count: "328", icon: <Calculator size={16} /> },
  { name: "Sales & Marketing", count: "410", icon: <Megaphone size={16} /> },
  { name: "Engineering", count: "276", icon: <Settings size={16} /> },
  { name: "Human Resources", count: "198", icon: <Users size={16} /> },
  { name: "Banking & Finance", count: "183", icon: <Landmark size={16} /> },
  { name: "Education & Training", count: "156", icon: <GraduationCap size={16} /> },
  { name: "Healthcare & Medical", count: "142", icon: <Heart size={16} /> },
  { name: "Customer Support", count: "118", icon: <Headphones size={16} /> },
  { name: "Hospitality & Tourism", count: "96", icon: <Compass size={16} /> },
  { name: "Logistics & Supply Chain", count: "88", icon: <Truck size={16} /> },
  { name: "Design & Creative", count: "74", icon: <Palette size={16} /> },
  { name: "Legal", count: "62", icon: <Scale size={16} /> },
  { name: "Government & NGO", count: "54", icon: <Globe size={16} /> },
  { name: "Media & Communication", count: "51", icon: <Tv size={16} /> },
  { name: "Construction", count: "47", icon: <Hammer size={16} /> },
  { name: "Retail & Wholesale", count: "43", icon: <ShoppingBag size={16} /> },
  { name: "Agriculture & Environment", count: "31", icon: <Sprout size={16} /> },
  { name: "Security Services", count: "29", icon: <Shield size={16} /> },
  { name: "Sports & Recreation", count: "18", icon: <Trophy size={16} /> },
];

export const MobileCategoryDropdown = () => {
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  return (
    <div className="mobile-cat-wrapper">
      <button
        onClick={() => setMobileCatOpen(!mobileCatOpen)}
        className={`mobile-dropdown-btn ${
          mobileCatOpen
            ? "rounded-t-[10px] rounded-b-none"
            : "rounded-[10px]"
        }`}
      >
        <span className="flex items-center gap-2">
          <Briefcase size={15} color="#2563eb" />
          Browse Job Categories
        </span>
        <span className={`flex items-center transition-transform duration-200 ${
          mobileCatOpen ? "rotate-180" : "rotate-0"
        }`}>
          <ChevronDown size={18} />
        </span>
      </button>

      {mobileCatOpen && (
        <div className="mobile-dropdown-content">
          <div className="mobile-search-inner">
            <Search size={14} className="text-slate-400" />
            <input placeholder="Search categories..." className="sidebar-search-input" />
          </div>

          {categories.map(cat => (
            <div key={cat.name} className={`cat-item ${cat.active ? "active" : ""} w-full`}>
              <div className="flex items-center gap-2.5">
                <span className={`flex items-center ${
                  cat.active ? "text-blue-600" : "text-slate-400"
                }`}>
                  {cat.icon}
                </span>
                <span className="text-[13px]">{cat.name}</span>
              </div>
              <span 
                className={`mobile-badge-count ${
                  cat.active
                    ? "bg-blue-50 text-blue-600"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};