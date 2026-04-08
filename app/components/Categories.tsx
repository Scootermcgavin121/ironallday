"use client";

import { useEffect, useState } from "react";
import {
  Heart, Dumbbell, Zap, Sparkles, Clock, Moon, Scale, FlaskConical,
  Package, Brain, Flame, Shield, Syringe, Pill, Trophy, TestTubes,
  Beaker, Activity, Eye, Leaf, Star, Target,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Heart, Dumbbell, Zap, Sparkles, Clock, Moon, Scale, FlaskConical,
  Package, Brain, Flame, Shield, Syringe, Pill, Trophy, TestTubes,
  Beaker, Activity, Eye, Leaf, Star, Target,
};

type Category = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  displayOrder: number;
};

const CATEGORIES_API = "https://lumevara.com/api/categories";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(CATEGORIES_API)
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  if (categories.length === 0) return null;

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Categories
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            What Are You Researching?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.icon || ""] || Package;
            return (
              <a key={cat.slug} href="/shop">
                <Card className="group bg-surface border-white/5 hover:border-accent/40 p-8 transition-all duration-300 cursor-pointer h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-foreground group-hover:text-accent transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {cat.description}
                  </p>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
