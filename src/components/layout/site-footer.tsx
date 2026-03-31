export function SiteFooter(): JSX.Element {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-frame py-8">
        <p className="layer-content text-sm text-slate-600">© {new Date().getFullYear()} Crucial Recycling. All rights reserved.</p>
      </div>
    </footer>
  );
}
