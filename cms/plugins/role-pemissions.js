export default {
  data: () => ({
    permissions: [
      {
        "name": "Dashboard",
        "unique": "dashboard",
        "checked": true
      },
      {
        "name": "Allocation Groups",
        "unique": "allocation-groups",
        "checked": true
      },
      {
        "name": "Allocation Contents",
        "unique": "allocation-contents",
        "checked": false
      },
      {
        "name": "Inhouse Ads Management",
        "unique": "inhouse-ads",
        "checked": true
      },
      {
        "name": "Print/Website Ads",
        "unique": "ads",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-ad",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-ad",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-ad",
            "checked": true
          }
        ]
      },
      {
        "name": "Articles",
        "unique": "articles",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-article",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-article",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-article",
            "checked": true
          }
        ]
      },
      {
        "name": "Article Categories",
        "unique": "article-categories",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-article-category",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-article-category",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-article-category",
            "checked": true
          }
        ]
      },
      {
        "name": "Brands",
        "unique": "brands",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-brand",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-brand",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-brand",
            "checked": true
          }
        ]
      },
      {
        "name": "Body Types",
        "unique": "body-types",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-body-type",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-body-type",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-body-type",
            "checked": true
          }
        ]
      },
      {
        "name": "Contributors",
        "unique": "contributors",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-contributor",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-contributor",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-contributor",
            "checked": true
          }
        ]
      },
      {
        "name": "Discovers",
        "unique": "discovers",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-discover",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-discover",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-discover",
            "checked": true
          }
        ]
      },
      {
        "name": "Faqs",
        "unique": "faqs",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-faq",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-faq",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-faq",
            "checked": true
          }
        ]
      },
      {
        "name": "Pages",
        "unique": "pages",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-page",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-page",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-page",
            "checked": true
          }
        ]
      },
      {
        "name": "Print Issues",
        "unique": "print-issues",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-print-issue",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-print-issue",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-print-issue",
            "checked": true
          }
        ]
      },
      {
        "name": "Quizzes",
        "unique": "quizzes",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-quiz",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-quiz",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-quiz",
            "checked": true
          }
        ]
      },
      {
        "name": "Roles",
        "unique": "roles",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-role",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-role",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-role",
            "checked": true
          }
        ]
      },
      {
        "name": "Sponsored Videos",
        "unique": "sponsored-videos",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-sponsored-video",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-sponsored-video",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-sponsored-video",
            "checked": true
          }
        ]
      },
      {
        "name": "Tags",
        "unique": "tags",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-tag",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-tag",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-tag",
            "checked": true
          }
        ]
      },
      {
        "name": "Users",
        "unique": "users",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-user",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-user",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-user",
            "checked": true
          }
        ]
      },
      {
        "name": "Vehicles",
        "unique": "vehicles",
        "checked": true,
        "actions": [
          {
            "name": "Add",
            "unique": "add-vehicle",
            "checked": true
          },
          {
            "name": "Update",
            "unique": "update-vehicle",
            "checked": true
          },
          {
            "name": "Delete",
            "unique": "delete-vehicle",
            "checked": true
          }
        ]
      }
    ]
  }),
  methods: {
    toggleStatus (item) {
      if (item.actions) {
        if (!item.checked) {
          item.actions.forEach(sub => {
            sub.checked = false
          })
        }
      }
    }
  }
}
