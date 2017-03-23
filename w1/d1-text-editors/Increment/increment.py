import sublime
import sublime_plugin


class IncrementCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		for sel in self.view.sel():
			string = self.view.substr(sel)
			
			try:
				as_int = int(string)
			except ValueError:
				continue

			self.view.replace(edit, sel, str(as_int + 1))
