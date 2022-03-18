/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {useScope as useI18nScope} from '@canvas/i18n'
import {generateActionTemplates} from '../generateActionTemplates'

const I18n = useI18nScope('permissions_templates_41')

export const template = generateActionTemplates(
  [
    {
      title: I18n.t('Rubrics'),
      description: I18n.t(
        'Determines visibility and management of the Rubrics link in Account Navigation.'
      )
    },
    {
      description: I18n.t('Allows user to create, edit, and delete rubrics.')
    }
  ],
  [
    {
      title: I18n.t('Assignments'),
      description: I18n.t(
        'Users can access and create (but not edit) individual assignment rubrics through Assignments when Course Content - view and Assignments and Quizzes - add are enabled.'
      )
    }
  ],
  [
    {
      title: I18n.t('Rubrics'),
      description: I18n.t(
        'Determines visibility and management of Rubrics link in Account Navigation.'
      )
    },
    {
      description: I18n.t('Allows user to view the Rubrics link in Course Navigation.')
    },
    {
      description: I18n.t('Allows user to create, edit, and delete course rubrics.')
    }
  ],
  [
    {
      title: I18n.t('Assignments'),
      description: I18n.t(
        'Users can access and create (but not edit) individual assignment rubrics through Assignments when Assignments and Quizzes - add is enabled.'
      )
    }
  ]
)
